import TaskBoard from "./components/task/TaskBoard";
import TaskProvider from "./context/TaskProvider";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <>
    <TaskProvider>
      <DashboardLayout>
        <TaskBoard />
      </DashboardLayout>
      </TaskProvider>
    </>
  );
}

export default App;
