import { Card } from './Card';
import { useEffect, useState } from 'react';
import { Input } from './Input';
import axios from 'axios';

const initialTasks = [
    { id: 1, text: "This is a First Task" },
    { id: 2, text: "This is a Second Task" },
    { id: 3, text: "This is a Third Task" },
    { id: 4, text: "This is a Fourth Task" }
];


export const Task = () => {
    const [task, setTask] = useState(initialTasks);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8080');
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [])


    const addtaskhandler = (newTask) => {
        try {
            const body = {
                activity_id: Math.random(),
                todo_description: "newTask"
            };
            await axios.post('http://localhost:8080/create', body);
            await fetchTasks();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTaskhandler = (completedId) => {
        setTask((prev) => {
            return prev.filter((task) => task.id !== completedId);
        });
    };



    return (
        <div className="tasks">
            <h1>Tasks</h1>
            <Input onAddTask={addtaskhandler} />
            {task.map((task) => {
                return (
                    <Card
                        key={task.activityId}
                        text={task.todo_description}
                        id={task.activityId}
                        ontaskcomplete={deleteTaskhandler}
                    />
                )
            })}
        </div>
    );
};

