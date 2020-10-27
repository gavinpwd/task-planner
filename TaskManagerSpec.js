describe('TaskManager',()=>{
describe('#constructor',()=>{
describe('when initializing a new TaskManager',()=>{
    it('should create an empty tasks array',()=>{
        const taskManager = new TaskManager(1);

        expect(taskManager.tasks).toEqual([]);
    });
    it('should set the currentId to the passed in number', () => {
        const taskManager = new TaskManager(1);

        expect(taskManager.currentId).toBe(1);
      });
});
});
describe('#addTask', () => {
    describe('passing new task data as parameters', () => {
      it('should add the task to the tasks array', () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        expect(taskManager.tasks[0]).toEqual(task);
      });

      it('should increment the currentId property', () => {
        const taskManager = new TaskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        expect(taskManager.currentId).toBe(11);
      });
    });
  });
  describe('#deleteTask', () => {
    describe('when passed an existing taskId', () => {
      it('should remove the task from the tasks array', () => {
        const taskManager = new TaskManager();

        const taskToDelete = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(taskToDelete.name, taskToDelete.description, taskToDelete.assignedTom, taskToDelete.dueDate);
        taskManager.addTask('feed puppy', 'feed the puppy a heathy meal', 'nick', Date.now());

        taskManager.deleteTask(taskToDelete.id);

        expect(taskManager.tasks).not.toContain(taskToDelete);
      });
    });
  });

  describe('#getTaskById', () => {
    describe('when passed an existing taskId', () => {
      it('should return the task', () => {
        const taskManager = new TaskManager();

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        taskManager.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        const result = taskManager.getTaskById(task.id);

        expect(result).toEqual(task);
      });
    });
  });   
 
});