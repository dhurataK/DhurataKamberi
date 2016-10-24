from flask import Flask, render_template, redirect, jsonify, request
from mysqlconnection import MySQLConnector

app = Flask(__name__)
mysql = MySQLConnector(app,'notes')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/notes')
def show_notes():
    query = "SELECT * FROM notes"
    notes = mysql.query_db(query)
    return render_template('notes.html', notes = notes)

@app.route('/notes/create', methods=['POST'])
def create():
    query = "INSERT INTO notes(title, created_at, updated_at) VALUES(:title,NOW(),NOW())"
    data={
        'title':request.form['title']
    }
    mysql.query_db(query,data)
    return redirect('/notes')

@app.route('/notes/<id>/delete', methods=['POST'])
def destroy(id):
    query = "DELETE FROM notes WHERE id = :id"
    data ={
        'id':id
    }
    mysql.query_db(query,data)
    return redirect('/notes')

@app.route('/notes/<id>/update', methods=['POST'])
def update(id):
    query = "UPDATE notes SET description = :description,updated_at = NOW() WHERE id = :id"
    data = {
        'description': request.form['description'],
        'id':id
    }
    mysql.query_db(query,data)
    return redirect('/notes')

app.run(debug=True)
