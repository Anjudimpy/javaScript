
     // Step 1: Find the index of "@" in the email
      // Step 2: Find the index of the last dot "." in the email
     // Step 3: Calculate the length of the email
     // Step 4: Validate the email
    // Check if there are at least 3 characters before the "@" symbol
    // Ensure there is a dot "." at least 4 characters after "@"
    // Make sure there are at least 2 characters after the last dot "."
    
    // If all conditions are met, assign a welcome message with email name to result
    // If any condition fails, assign "invalid email" to result
       
     // Return the final result  
function main(email) {
    let result;
    const emailLen = email.length;
    const atIndex = email.lastIndexOf('@')
    const dotIndex = email.lastIndexOf('.')
        
      if (atIndex === -1 || dotIndex === -1) {
          return "invalid email";
      }
      const lastIndex = emailLen - 1;
      if(
      emailLen >11 && 
      (lastIndex - atIndex)>= 3 &&
      (dotIndex-atIndex) >=4 &&
      (lastIndex - dotIndex) >=2  )
      {
          result = `${email} welcome `;
      }
      else{
          result = "invalid email";
      }
  
    return result;
  }
  console.log(main("anju@gmail.com"));