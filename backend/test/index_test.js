const { expect } = require('chai');
let chai = require('chai')
let chaiHttp = require('chai-http')
let app =  require('../index')
chai.should();
chai.use(chaiHttp);

describe('Tests index.js',()=>{
    it('/ endpoint should return hello world',(done)=>{
        chai.request(app)
        .get('/')
        .end((err,res)=>{
            res.text.should.be.eql('Hello world')
            done();
        })
    })
    
    it('/news endpoint should return news about a company. Testing with AAPL', (done)=> {
        chai.request(app)
        .get('/news/AAPL')
        .end((err,res)=>{
            res.text.should.contain('AAPL')
            done();
        })
    })

    it('/comprehend endpoint should work with 1 input', (done)=> {
        chai.request(app)
        .post('/comprehend')
        .send({news: "Good Input"})
        .end((err,res)=>{
            res.text.should.contain('POSITIVE')
            done();
        })
    })

    it('/comprehend endpoint should work with multiple inputs', (done)=>{
        chai.request(app)
        .post('/comprehend')
        .send({
            news: ["Good Headline", "Bad Headline"]
        })
        .end((err,res)=>
        {
            res.text.should.contain('MIXED')
            done();
        })
    })
})
