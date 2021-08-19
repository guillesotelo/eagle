export const styleStatus = task => {
    if(task.status === 'Active') return '#FFB946'
    if(task.status === 'Completed') return '#2ED47A'
    if(task.status === 'Ended') return '#F7685B'
}