(function () {

  "use strict";

  angular.module("app")
    .factory("todoService", todoService);

  function todoService ($rootScope, todoListService) {
    var self = this;

    self.editToggle = false;
    self.newItem = new Item();

    //API
    return {
      addNewItem,
      deleteItem,
      editMode,
      editItem,
      editedItem,
      saveEditedItem,
      incompleteCount,
      warningLevel,
      clearForm
    };

    function addNewItem (items, newItem) {
      if (newItem && newItem.action) {
        items.push({
          id: items.length + 1,
          action: newItem.action,
          done: false,
          deadline: newItem.deadline,
          responsible: newItem.responsible,
          estimation: newItem.estimation
        });
        clearForm(newItem);
      }
    }

    function deleteItem (items, itemId) {
      angular.forEach(items, (item, key) => {
        if (item.id === itemId) {
          items.splice(key, 1);
        }
      });
    }

    function editMode () {
      return self.editToggle ? true : false;
    }


    function editItem (item) {
      self.newItem = angular.copy(item);

      self.editToggle = !self.editToggle;
      editMode();

      $rootScope.$emit('edit-item');

    }

    function saveEditedItem (items, editItem) {
      var editedItems = [];

      angular.forEach(items, (item, key) => {
        if (item.id === editItem.id) {
          item = angular.copy(editItem);
          item.deadline = item.deadline;
          console.log(item);
        }
        editedItems.push(item);
      });
      self.editToggle = false;
      todoListService.setTodoList(editedItems);
      clearForm(self.newItem);
      $rootScope.$emit('save-item');
    }

    function editedItem () {
      return self.newItem;
    }

    function Item () {
      this.id = -1;
      this.action = '';
      this.done = false;
      this.responsible = '';
      this.estimation = '';
      this.deadline = '';
    }

    function clearForm (item) {
      for (let key in item) {
        item[key] = null;
      }
    }

    function incompleteCount (items) {
      let count = 0;

      angular.forEach(items, (item) => {
        if (!item.done) count++;
      });

      return count;
    }

    function warningLevel (items) {
      return incompleteCount(items) < 3
        ? "label-success"
        : "label-warning";
    }

  }

})();
