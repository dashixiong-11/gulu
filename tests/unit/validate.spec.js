import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import validate from '../../src/validate'

describe('validate', () => {
   it('Validate 存在.', () => {
      expect(validate).to.exist
   })

   it('required true 报错',()=>{
      let data = { email:'' }
      let rules = [ { key:'email',required:true} ]
      let error = validate(data,rules)
      expect(error.email.required).to.eq('必填')
   })

   it('required true 通过',()=>{
      let data = { email:0 }
      let rules = [ { key:'email',required:true} ]
      let error = validate(data,rules)
      expect(error.email).to.not.exist
   })

   it('pattern 报错',()=>{
      let data = { email:'@qq.com' }
      let rules = [ { key:'email',pattern:/^.+@.+$/} ]
      let error = validate(data,rules)
      expect(error.email.pattern).to.eq('格式不正确')
   })

   it('pattern 通过',()=>{
      let data = { email:'1@qq.com' }
      let rules = [ { key:'email',pattern:/^.+@.+$/} ]
      let error = validate(data,rules)
      expect(error.email).to.not.exist
   })

   it('内置 email 规则 报错',()=>{
      let data = { email:'@qq.com' }
      let rules = [ { key:'email',pattern:'email'} ]
      let error = validate(data,rules)
      expect(error.email.pattern).to.eq('格式不正确')
   })

   it('内置 email 规则 通过',()=>{
      let data = { email:'1@qq.com' }
      let rules = [ { key:'email',pattern:'email'} ]
      let error = validate(data,rules)
      expect(error.email).to.not.exist
   })

   it('required & pattern',()=>{
      let data = { email:'' }
      let rules = [ { key:'email',pattern:'email',required:true} ]
      let error = validate(data,rules)
      expect(error.email.required).to.exist
      expect(error.email.pattern).to.not.exist
   })

   it('pattern & minLength',()=>{
      let data = { email:'' }
      let rules = [ { key:'email',pattern:'email',minLength:6} ]
      let error = validate(data,rules)
      expect(error.email.minLength).to.exist
      expect(error.email.pattern).to.exist
   })

   it('maxLength',()=>{
      let data = { email:'123123123123123123' }
      let rules = [ { key:'email',pattern:'email',maxLength:10} ]
      let error = validate(data,rules)
      expect(error.email.maxLength).to.exist
   })
})
