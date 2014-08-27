'use strict';

describe('Directive: customJobName', function () {

  // load the directive's module
  beforeEach(module('gsPlatformToolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<custom-job-name></custom-job-name>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the customJobName directive');
  }));
});