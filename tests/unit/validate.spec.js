import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

import Validator from '../../src/validate.js'


describe('Validator', () => {
   it('Validator 存在.', () => {
      expect(Validator).to.exist
   })


   it('required true 报错', () => {
      let data = {email: ''}
      let rules = [{key: 'email', required: true}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email.required).to.eq('必填')
   })

   it('required true 通过', () => {
      let data = {email: 0}
      let rules = [{key: 'email', required: true}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email).to.not.exist
   })

   it('pattern 报错', () => {
      let data = {email: '@qq.com'}
      let rules = [{key: 'email', pattern: /^.+@.+$/}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email.pattern).to.eq('格式不正确')
   })

   it('pattern 通过', () => {
      let data = {email: '1@qq.com'}
      let rules = [{key: 'email', pattern: /^.+@.+$/}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email).to.not.exist
   })

   it('内置 email 规则 报错', () => {
      let data = {email: '@qq.com'}
      let rules = [{key: 'email', pattern: 'email'}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email.pattern).to.eq('格式不正确')
   })

   it('内置 email 规则 通过', () => {
      let data = {email: '1@qq.com'}
      let rules = [{key: 'email', pattern: 'email'}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email).to.not.exist
   })

   it('required & pattern', () => {
      let data = {email: ''}
      let rules = [{key: 'email', pattern: 'email', required: true}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email.required).to.exist
      expect(error.email.pattern).to.not.exist
   })

   it('pattern & minLength', () => {
      let data = {email: ''}
      let rules = [{key: 'email', pattern: 'email', minLength: 6}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email.minLength).to.exist
      expect(error.email.pattern).to.exist
   })

   it('maxLength', () => {
      let data = {email: '123123123123123123'}
      let rules = [{key: 'email', pattern: 'email', maxLength: 10}]
      let validator = new Validator()
      let error = validator.validate(data, rules)
      expect(error.email.maxLength).to.exist
   })

   it('many keys', () => {
      let data = {email: '123123123123123123'}
      let rules = [{
         key: 'email', pattern: 'email', maxLength: 10, hasNumber: true,
         hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderscore: true
      }]
      let validator = new Validator()
      let fn = () => {
         validator.validate(data, rules)
      }
      expect(fn).to.throw()
   })

   it('自定义测试规则 hasNumber', () => {
      let data = {email: 'gmail'}
      let validator = new Validator()
      validator.hasNumber = (value) => {
         if (!/\d/.test(value)) {
            return '必须含有数字'
         }
      }
      let rules = [{key: 'email', pattern: 'email', maxLength: 10, hasNumber: true}]
      let error
      let fn = () => {
         error = validator.validate(data, rules)
      }
      expect(fn).to.not.throw()
      expect(error.email.hasNumber).to.eq('必须含有数字')
   })

   it('全局添加规则', () => {
      let data = {email: 'aacscsa'}
      Validator.add('hasNumber', (value) => {
         if (!/\d/.test(value)) {
            return '必须含有数字'
         }
      })
      let validator1 = new Validator()
      let validator2 = new Validator()
      let rules = [{key: 'email',required:true,hasNumber: true}]
      expect(() => {
         validator1.validate(data, rules)
      }).to.not.throw()
      expect(() => {
         validator2.validate(data, rules)
      }).to.not.throw()
   })
})
