import Head from "next/head";
import TodoApp from "../Components/TodoApp";
export default function Home() {
  return (
    <div className="min-h-screen py-2">
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <TodoApp />
      </div>
    </div>
  );
}
