export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'open',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
