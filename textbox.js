var app = angular.module("textboxApp", [])
app.controller("textboxCtrl", function($scope) {
   var counter = 0
   $scope.value1 = ''
   $scope.result = null;
   $scope.firstfield = {
      'alert': false
   }
   $scope.validation = {
      'alert': false
   }
   $scope.validation2 = {
      'alert': false
   }
   $scope.validation1 = {
      'alert': false
   }
   $scope.keyevent = function(e) {
      if ($scope.value1 == '') {
         $scope.value2 = ''
      }
     
      $scope.firstfield.alert = false;
      $scope.validation.alert = false;
      $scope.validation1.alert = false;
      $scope.validation2.alert = false;
      if ($scope.value1 == "") {
         counter = 0;
      }
      if (counter == 0) {
         $scope.val = e.keyCode
         counter = counter + 1
      }
      else {
         if (e.keyCode == 8) {}
         else
         if ((counter == 1 && ($scope.val >= 65 && $scope.val <= 90))) {
            if (($scope.val >= 65 && $scope.val <= 90) && (e.keyCode >= 65 && e.keyCode <= 90)) {}
            else {
               $scope.validation.alert = true;
               e.preventDefault();
            }
         }
         else if ((counter == 1 && ($scope.val >= 48 && $scope.val <= 57))) {
            if (($scope.val >= 48 && $scope.val <= 57) && (e.keyCode >= 48 && e.keyCode <= 57)) {}
            else {
               $scope.validation2.alert = true;
               e.preventDefault();
            }
         }
      }
   }
   $scope.checkValue2 = function(e) {
      
      if ($scope.value1 == '' || $scope.value1 == null) {
         $scope.validation1.alert = true;
         e.preventDefault();
         
      }
   }
   $scope.remove = function() {
      $scope.value1 = null;
      $scope.value2 = null;
      $scope.result = null;
      $scope.firstfield.alert = false;
      $scope.validation.alert = false;
      $scope.validation2.alert = false;
      $scope.validation1.alert = false;
      counter = 0;
   }
   $scope.calculation = function() {
     
      if ($scope.value1 == undefined || $scope.value1 == '') {
         $scope.firstfield.alert = true;
         $scope.validation1.alert = false;
      }
      else if ($scope.value2 == undefined || $scope.value2 == '') {
        
         $scope.firstfield.alert = true;
         $scope.validation2.alert = false;
         $scope.validation.alert = false;
         $scope.validation1.alert = false;
      }
      else {
         $scope.validation.alert = false;
         $scope.validation2.alert = false;
         $scope.validation1.alert = false;
         $scope.firstfield.alert = false;
         var add = parseInt($scope.value1) + parseInt($scope.value2);
         var concat = ($scope.value1) + ($scope.value2);
         if (isNaN(add)) {
            $scope.result = concat;
         }
         else {
            $scope.result = add;
         }
         $scope.delete1 = function() {
            $scope.value1 = null;
            $scope.value2 = null;
            $scope.result=null;
            counter = 0;
         }
         $scope.delete2 = function() {
            $scope.value2 = null;
         }
      }
   }
});