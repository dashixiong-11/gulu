<template>
    <div class="cascaderItem" :style="{ height:height }">
        <div class="left">
            <div class="label" v-for="(item,index) in items" :key="index" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <span class="icons">
                    <template v-if="item.name === loadingItem.name">
                    <Icon class="loading" name="jiazaizhong"></Icon>
                    </template>
                    <template v-else>
                    <Icon v-if="rightArrowVisible(item)" name="right"></Icon>
                    </template>
                </span>
            </div>
        </div>
        <div class="right" v-if="rightItem">
            <cascader-items :items="rightItem" :load-data="loadData" :level="level+1" :height="height"
                            :loading-item="loadingItem"
                            :selected="selected" @update:selected="upDateSelected">
            </cascader-items>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon'

    export default {
        name: "cascaderItems",
        components: {Icon},
        props: {
            items: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
            },
            loadData: {
                type: Function
            },
            loadingItem: {
                type: Object,
                default:()=> ({})
            }
        },
        methods: {
            onClickLabel(item) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level + 1)
                this.$emit('update:selected', copy)
            },
            upDateSelected(newSelected) {
                this.$emit('update:selected', newSelected)
            },
            rightArrowVisible(item) {
                return this.loadData ? !item.isLeaf : item.children
            }
        },
        computed: {
            rightItem() {
                if (this.selected[this.level]) {
                    let item = this.items.filter((item) => item.name === this.selected[this.level].name)
                    if (item && item[0].children && item[0].children.length > 0) {
                        return item[0].children
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../../styles/var";

    .cascaderItem {
        display: flex;
        height: 100px;

        .label {
            display: flex;
            align-items: center;
            padding: .4em 1em;
            white-space: nowrap;

            &:hover {
                background-color: $grey;
            }

            > .name {
                user-select: none;
            }

            > .icons {
                margin-left: auto;
                transform: scale(0.7);

                > .loading {
                    animation: spin 1s infinite linear;
                }
            }
        }

        .left {
            overflow: auto;
            padding: .3em 0;
            height: 100%;
        }

        .right {
            border-left: 1px solid $border-color-light;
            height: 100%;
        }
    }

</style>