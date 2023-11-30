// Without optional chaining
let user = {
  profile: {
    address: {
      city: "New York",
    },
  },
};

// Check if each level exists before accessing
let city =
  user && user.profile && user.profile.address && user.profile.address.city;

console.log(city); // Outputs: "New York"

//same with optional chaining
let newCity = user?.profile?.address?.city;
let address = user?.profile?.address;
console.log(newCity);
console.log(address);
