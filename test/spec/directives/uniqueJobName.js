'use strict';

describe('Directive: uniqueJobName', function () {

  // load the directive's module
  beforeEach(module('gsPlatformToolApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<unique-job-name></unique-job-name>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uniqueJobName directive');
  }));
});
