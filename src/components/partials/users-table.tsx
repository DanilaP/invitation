import { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useParams } from 'react-router';
import $api from '../../configs/axios.ts';
import './users-table.scss'; 


const UsersTable = () => {
    
    const [users, setUsers] = useState([]);
    const params = useParams();

    useEffect(() => {
        $api.post("/users", { password: params.pass })
        .then((res) => {
            setUsers(res.data.users);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);
    
    const dataSource = users.map((user: any, index: number) => {
        return {
            ...user,
            key: index
        }
    });
      
    const columns = [
        {
            title: 'Фио',
            dataIndex: 'fio',
            key: 'fio',
        },
        {
            title: 'Номер',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            render: (status: boolean) => 
                <div 
                    style={{ color: status ? "green" : "red" }}
                >
                        { status ? "Учавствует" : "Не учавствует" }
                </div>,
        }
    ];
      

    return (
        <div 
            className="users-table"
        >
            <Table 
                scroll={{ y: 500 }} 
                className='resized' 
                pagination={{ pageSize: 10}} 
                dataSource={dataSource} 
                columns={columns}
            >
            </Table>
        </div>
    )
};

export default UsersTable;