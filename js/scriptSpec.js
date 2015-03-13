describe('optIn', function(){

  var scope,
      compiled,
      element,
      logoDiv,
      html;

  beforeEach(module("appDirect"));
  beforeEach(module("opt-in.html"));
  beforeEach(inject(function($rootScope, $compile){

    var logoDiv = '<div class="brand-logo"></div>';
    var html = '';
    html += '<div><span>' + logoDiv + '</span><form method="POST" accept-charset="utf-8"><input type="text" name="firstName" placeholder="first name" id="" value="" /><input type="text" name="lastName" placeholder="last name" id="" value="" /><input type="text" name="email" placeholder="email"  id="email" value="" /><input type="submit" name="submit" value="Submit Your Info" /></form></div>';
    scope = $rootScope.$new();
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();

  }));

  it("should contain four input elements", function() {

    expect(element.find('input').length).toEqual(4);

  });

});