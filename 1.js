function isPrime(number){
    for (var i = number-1; i > 1; i--) {
          if (number%i == 0) {
              return false;
          }
      }
  
      return true;
  }
  
  // for (var i = 2; i <= 20; i++) {
  //   console.log(`${i}=${isPrime(i)}`)
  // }
  
  function findMinMax(numbers){
    const MinMax = {'min': null, 'max': null}
    MinMax['min'] = Math.min(...numbers)
    MinMax['max'] = Math.max(...numbers)
    return MinMax
  }
  
  let numbers = []
  for (var i = 0; i < 10; i++) {
    numbers.push(Math.random())
  }
  // console.log(findMinMax(numbers))
  // console.log(numbers.length)
  
  
  const user = {
    name: 'Maksim',
    age: 18,
    email: 'mnudga79@gmail.com',
    greet: function (name) {
      console.log(`Привет, ${name}`)
    }
  }
  
  function displayUserInfo(user) {
    return `Имя: ${user['name']}, Возраст:  ${user['age']}, Email: ${user['email']}`
  }
  
  // console.log(displayUserInfo(user))
  // user.greet(user['name'])
  
  const names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]
  function getName(names){
    for (var i = 0; i < names.length; i++) {
       console.log(`Студент ${names[i]}, ваш порядковый номер: ${i}`)
    }
  }
  
  
  function findLongestName(names){
    let name_len = 0
    let longest_name = null
    for (name of names) {
      if (name_len < name.length){
        name_len = name.length
        longest_name = name
      }
    }
    return longest_name
  }
  
  // getName(names)
  // console.log(findLongestName(names))
  
  function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (month < 10) {
      month = `0${month}`
    }
    if (day < 10) {
      day = `0${day}`
    }
    let h = date.getHours()
    let m = date.getMinutes()
  
    let formattedDate = day + ":" + month + ":" + year + ' ' + h + ":" + m;
    console.log(formattedDate);
    
  }
  
  function get_intersect_time(date1, date2){
    intersect_days = Math.abs(date2.getTime() - date1.getTime()) / (24 *1000 * 3600)
    return intersect_days
    
  }
  
  let date = new Date()
  let date1 = new Date('11-12-2011')
  let date2 = new Date('11-10-2011')
  
  formatDate(date)
  console.log(get_intersect_time(date1, date2))
  
  