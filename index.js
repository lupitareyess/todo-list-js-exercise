// Use an object to keep track of each task's state
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundy", "😨");
const tasks = [task1, task2];


newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

task1.logState(task1); // Clean Cat Litter has not been completed
task1.markCompleted(task1);
task1.logState(task1); // Clean Cat Litter has been completed


