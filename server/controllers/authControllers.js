// Controller is used to handle what we do with request it's make short ourcode instead in writing     
// routes folder (means logic)

const AuthModel  = require('../models/Auth');
const generateToken = require('../utils/generateToken')

// // Registering User

//REGISTER
// /api/register 
module.exports.signup = async (req, res) => {
  const {name, email, password} = req.body;
  if(!name || !email || !password) {
    res.status(400).json('Please fill all fields..')
  }

  AuthModel.findOne({email})
   .then(user=>{
       if(user){
        res.status(400).json({msg : 'User already exist'})
       }
   })

   const user = await AuthModel.create({
    name,
    email,
    password,

  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
  };
  
  
  
// Login User
module.exports.login = async (req, res) =>{
  const { email } = req.body;

  const user = await AuthModel.findOne({ email });

  // if (user) {
  //   res.json({
  //     _id: user._id,
  //     email: user.email,
  //     token: generateToken(user._id),
  //   });

  if (user) {
    res.json({
      _id: user._id,
      firstName  : user.firstName,
      lastName : user.lastName,
      email: user.email,
      isActive: user.isActive,
      roles: user.roles,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
}


// Get Users
module.exports.get_user = () =>{
   User.findById(req.user.id)
   .select('-password')
   .then(user=>res.json(user))
}

// Get Users
module.exports.logout = (req, res) =>{
    
    res.clearCookie('jwt', {path : '/'});
    res.send('User logout')
}