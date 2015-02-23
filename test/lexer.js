var should = require('should');
var lexer = new (require('../lexer'))();

describe('Lexer#lex', function(){
  it('should tokenize dollar sign', function(){
    lexer
      .lex("I made $5.42 today.")
      .should.eql(['I', 'made', '$', '5.42', 'today', '.']);
  });

  it('should tokenize dollar sign when not followed by a number', function(){
    lexer
      .lex("I made $some today.")
      .should.eql(['I', 'made', '$', 'some', 'today', '.']);
  });

  it('should tokenize parentheses', function(){
    lexer
      .lex("I made $5.42 today (but it should have been more).")
      .should.eql(['I', 'made', '$', '5.42', 'today', '(', 'but', 'it', 'should', 'have', 'been', 'more', ')', '.']);
  });
});
