/**
 You want to make a modification to the list of employees to reflect a recent company-wide salary increase. You have been provided with the following information:
1. Salaries for employees in the "sales" department should be increased by 10%.
2. Salaries for employees in the "engineering" department should be increased by 15%.
3. Salaries for employees in all other departments should be increased by 5%.
 */


const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 },
  ];

  function increaseSalaries(employees)
  {
    return employees.map((emp)=>{
        let newSalary = emp.salary;
        
        switch(emp.department){
            case 'sales' : emp.salary *= 110/100;
                break;
            case 'engineering': newSalary *= 115/100;
                break;
            default : newSalary *= 105/100;
                break;
        }

        return {...emp,
            salary: newSalary.toFixed(1)
        };
    });

  }

      const updatedEmployees = increaseSalaries(employees);

      console.log("Original Employees:", employees);
      console.log("Updated Employees:", updatedEmployees);