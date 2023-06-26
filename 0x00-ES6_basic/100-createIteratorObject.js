export default function createIteratorObject(report) {
    const employees = [];
        
        for (const dept of Object.keys(report.allEmployees)) {
            for (const emplys of report.allEmployees[dept]) {
                employees.push(emplys);
            }
        }
        return employees;
}