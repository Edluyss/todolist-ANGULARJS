var app = angular.module('todoApp', []);
app.controller('MainController', function(){
    var ctr = this;
    ctr.taskList = [];

    ctr.addTask = function( ){
        ctr.taskList.push(
            {
                desc: ctr.taskInput,
                done: false,
                edit: false,
                del: false
            }
        );
    ctr.clearCompleted = function( ){
        ctr.taskList = ctr.taskList.filter(function(element){
            if(element.done == true){
                return false;
            }else{
                return true;}
        });
    }
    ctr.delete = function(index){
        ctr.taskList.splice(index,1);
    }
    ctr.clearAll = function( ){
        ctr.taskList = ctr.taskList.filter(function(element){
          return false
        });
    }
    ctr.taskInput = ''; 
 }
});