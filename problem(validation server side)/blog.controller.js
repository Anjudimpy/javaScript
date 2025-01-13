// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  const {title, description, image} = req.body;
  let errors = [];
  let success = 'validation successfull'
  if(!title || title.trim() == ''){
    errors.push('The title field should not be empty')
  }
  else if(title.trim().length<3){
     errors.push('The title field should contain at least 3 characters')  
  }
  if(!description || description.trim()==''){
    errors.push('The description field should not be empty')
  } else if(description.trim().length<10){
    errors.push('The description field should contain at least 10 characters')
  }
  try{
    const validUrl = new URL(image);
  }catch(err){
     errors.push("The image URL provided should be a valid URL");
  }

  if (errors.length > 0) {

    return res.status(401).render("addBlog", { errors:errors[0], success: false });
  }

  res.status(201).render("addBlog", { errors: null, success: true });
};

export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
