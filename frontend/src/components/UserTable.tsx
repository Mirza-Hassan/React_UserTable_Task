import { useState } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useUserContext } from '../context/UserContext';
import { User } from '../context/types';
import './UserTable.css'; 

function UserTable() {
  // State to manage the search input
  const [search, setSearch] = useState<string>('');

  // Get the user data from the context
  const { users } = useUserContext();

  // Generate filter options for the columns
  const nameFilterOptions = Array.from(new Set(users.map((item: User) => item.name)));
  const emailFilterOptions = Array.from(new Set(users.map((item: User) => item.email)));
  const ageFilterOptions = Array.from(new Set(users.map((item: User) => calculateAge(item.birthdate).toString())));

  // Define table columns
  const columns: any[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // Sort and filter by name
      sorter: (a: User, b: User) => a.name.localeCompare(b.name),
      filters: nameFilterOptions.map(option => ({ text: option, value: option })),
      onFilter: (value: string, record: User) => record.name.includes(value),
      filterMultiple: false,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      // Sort and filter by email
      sorter: (a: User, b: User) => a.email.localeCompare(b.email),
      filters: emailFilterOptions.map(option => ({ text: option, value: option })),
      onFilter: (value: string, record: User) => record.email.includes(value),
      filterMultiple: false,
    },
    {
      title: 'Date of Birth',
      dataIndex: 'birthdate',
      key: 'birthdate',
      // Sort by date of birth
      sorter: (a: User, b: User) => new Date(a.birthdate).getTime() - new Date(b.birthdate).getTime(),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      // Calculate age from birthdate and sort/filter by age
      render: (text: any, record: User) => calculateAge(record.birthdate),
      sorter: (a: User, b: User) => {
        const ageA = parseInt(calculateAge(a.birthdate));
        const ageB = parseInt(calculateAge(b.birthdate));
        return ageA - ageB;
      },
      filters: ageFilterOptions.map(option => ({ text: option, value: option })),
      onFilter: (value: string, record: User) => calculateAge(record.birthdate).toString() === value,
      filterMultiple: false,
    },
  ];

  // Function to calculate age from birthdate
  function calculateAge(birthDate: string): string {
    const dob = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    return age.toString();
  }

  // Filter user data based on search input
  const filteredData = users.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    calculateAge(item.birthdate).toString() === search
  );

  return (
    <div className="user-table-container">
        {/* Search input */}
        <Input
          placeholder="Search Name, Email, or Age"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          prefix={<SearchOutlined />}
          className="search-bar"
        />

      {/* Table */}
      <div className="table-container">
        <Table dataSource={filteredData} rowKey="id" columns={columns} />
      </div>
    </div>
  );
}

export default UserTable;
