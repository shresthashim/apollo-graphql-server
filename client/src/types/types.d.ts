interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  user: User;
}
