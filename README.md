# Mod7MarvelCharfull-stack
Requirements Met
Prework
Sketch/Plan/Prototype: Detailed plan provided above.
React Bootstrap: Used for styling and layout throughout.
Mobile-Friendly: Responsive design with Bootstrap’s grid and Navbar.
Pages/Navigation
404 Page: Implemented in NotFound.jsx.
Home Page: Created in Home.jsx, no characters displayed.
Navbar: Responsive with React Bootstrap in NavbarComponent.jsx.
React Router: Used in App.jsx for navigation.
useParams/useNavigate: Used in CharacterDetails.jsx, EditCharacter.jsx, and CreateCharacter.jsx.
Backend Interaction
Axios: Used for all HTTP requests.
View All Characters: Characters.jsx with cards via CharacterCard.jsx.
View Individual Character: CharacterDetails.jsx.
Create Character: CreateCharacter.jsx with Toast confirmation.
Edit Character: EditCharacter.jsx with pre-populated form and Toast confirmation.
Delete Character: Characters.jsx with Modal confirmation.
Forms
React Bootstrap Components: Used in CharacterForm.jsx (e.g., Form.Group, Form.Label, Form.Control).
Required Inputs: Name field is required with validation.
State Object: formData manages input in CharacterForm.jsx.
Error Messages: Alerts shown on HTTP failures.
Loading Messages: Spinners shown during requests.
Additional Notes
Components: Created as needed for modularity.
Event Listeners: Managed with onClick, onSubmit, etc.
Conditional Rendering: Used for loading, error, and success states.
Styling: Marvel-inspired theme with readability in mind.
Research: Assumed endpoints; adjust based on server.py if different.
