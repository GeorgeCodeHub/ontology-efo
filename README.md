# Ontology EFO terms data visualizer and search engine

Ontology-efo is an ontology visualization tool that utilizes EFO (Experimental Factor Ontology) terms to organize and
display data in a table format. Additionally, the app may also provide visualizations such as graphs or diagrams to help
users understand the relationships between different terms in the ontology. Overall, this app is designed to make it
easier for researchers and other users to explore and understand the EFO ontology and the data it describes.

## Installation Guide:

To run the project locally on your environment you need to have installed on your device NodeJS >= 14, Python >= 3.10
and PostgreSQL:

### For the server:

1. Download or clone project to your repository
2. Create a new PostgreSQL database
3. Open the project with VS Code or your own interpreter
4. Create a `.env` file inside the `/server` directory and add the following values
   ```
   DATABASE_HOSTNAME=localhost
   DATABASE_PORT=5432
   DATABASE_PASSWORD=yourdatabasepassword
   DATABASE_NAME=yourdatabasename
   DATABASE_USERNAME=yourdatabaseusername
   SECRET_KEY=yoursecretdjangokey
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   ```
5. Open a terminal and run the following commands

   In the server directory:

   `pip install - r requirements.txt`

   `python manage.py migrate`

   `python manage.py runserver`

6. If done correctly the following URLs will return some data results:

   - http://127.0.0.1:8000/api/get_terms
   - http://127.0.0.1:8000/api/search_terms?search=cardinal

### For the client:

1. Open a new terminal in the `/client` directory
2. Run the following commands:

   `npm install`

   `npm run dev`

3. If no errors occur then the client will be open on: http://localhost:5173/

For any issues please feel free to contact me. Thank you for trying out my project.
