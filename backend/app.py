from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import config

app = Flask(__name__)

CORS(app)

# config
app.config['MYSQL_HOST'] = config.MYSQL_HOST
app.config['MYSQL_USER'] = config.MYSQL_USER
app.config['MYSQL_PASSWORD'] = config.MYSQL_PASSWORD
app.config['MYSQL_DB'] = config.MYSQL_DB

mysql = MySQL(app)

# ADD student
@app.route('/jan', methods=['POST'])
def add_studentjan():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO january(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/feb', methods=['POST'])
def add_studentfeb():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO february(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/ma', methods=['POST'])
def add_studentma():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO march(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/ap', methods=['POST'])
def add_studentap():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO april(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/may', methods=['POST'])
def add_studentmay():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO may(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/jun', methods=['POST'])
def add_studentjun():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO june(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/july', methods=['POST'])
def add_studentjuly():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO july(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/au', methods=['POST'])
def add_studentau():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO august(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/se', methods=['POST'])
def add_studentse():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO september(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/oc', methods=['POST'])
def add_studentoc():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO october(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/no', methods=['POST'])
def add_studentno():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO november(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
@app.route('/de', methods=['POST'])
def add_studentde():
    data = request.get_json()
    id = data['id']
    name = data['name']
    homework = data['homework']
    quize = data['quize']
    soft_skill = data['soft_skill']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO december(id,name,homework,quize,soft_skill) VALUES(%s,%s,%s,%s,%s)", (id,name,homework,quize,soft_skill))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
# Get Students
@app.route('/january', methods=['GET'])
def get_sub1():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM january')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects), 201
@app.route('/february', methods=['GET'])
def get_sub2():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM february')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/march', methods=['GET'])
def get_sub3():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM march')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/april', methods=['GET'])
def get_sub4():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM april')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/may', methods=['GET'])
def get_sub5():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM may')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/june', methods=['GET'])
def get_sub6():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM june')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/july', methods=['GET'])
def get_sub7():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM july')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/august', methods=['GET'])
def get_sub8():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM august')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/september', methods=['GET'])
def get_sub9():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM september')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/october', methods=['GET'])
def get_sub10():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM october')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/november', methods=['GET'])
def get_sub11():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM november')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
@app.route('/december', methods=['GET'])
def get_sub12():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM december')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "homework":row[2],
            "quize":row[3],
            "softskill":row[4],
            "average":round((row[2] + row[3] + row[4])/3,2),
            }
        if ((row[2] + row[3] + row[4] )/3) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects)
# 
# Delete
# 
@app.route('/february/<int:id>', methods=['DELETE'])
def delete_1(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM february WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/january/<int:id>', methods=['DELETE'])
def delete_2(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM january WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/march/<int:id>', methods=['DELETE'])
def delete_3(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM march WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/april/<int:id>', methods=['DELETE'])
def delete_4(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM april WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/may/<int:id>', methods=['DELETE'])
def delete_5(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM may WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/june/<int:id>', methods=['DELETE'])
def delete_6(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM june WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/july/<int:id>', methods=['DELETE'])
def delete_7(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM july WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/august/<int:id>', methods=['DELETE'])
def delete_8(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM august WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/september/<int:id>', methods=['DELETE'])
def delete_9(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM september WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/october/<int:id>', methods=['DELETE'])
def delete_10(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM october WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/november/<int:id>', methods=['DELETE'])
def delete_11(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM november WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/december/<int:id>', methods=['DELETE'])
def delete_12(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM december WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
@app.route('/january/<int:id>', methods=['GET'])
def get_january(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM january WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'january not found'}), 404
@app.route('/february/<int:id>', methods=['GET'])
def get_february(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM february WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'february not found'}), 404
@app.route('/march/<int:id>', methods=['GET'])
def get_march(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM march WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'march not found'}), 404
@app.route('/april/<int:id>', methods=['GET'])
def get_april(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM april WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'april not found'}), 404
@app.route('/may/<int:id>', methods=['GET'])
def get_may(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM may WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'may not found'}), 404
@app.route('/june/<int:id>', methods=['GET'])
def get_june(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM june WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'june not found'}), 404
@app.route('/july/<int:id>', methods=['GET'])
def get_july(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM july WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'july not found'}), 404
@app.route('/august/<int:id>', methods=['GET'])
def get_august(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM august WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'august not found'}), 404
@app.route('/september/<int:id>', methods=['GET'])
def get_september(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM september WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'september not found'}), 404
@app.route('/october/<int:id>', methods=['GET'])
def get_october(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM october WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'october not found'}), 404
@app.route('/november/<int:id>', methods=['GET'])
def get_november(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM november WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'november not found'}), 404
@app.route('/december/<int:id>', methods=['GET'])
def get_december(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM december WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'homework': row[2], 'quize': row[3], 'soft_skill': row[4]})
    else:
        return jsonify({'message': 'december not found'}), 404
# 
# add term
# term4
@app.route('/term4', methods=['POST'])
def add_tem4():
    data = request.get_json()
    id = data['id']
    name = data['name']
    oop = data['oop']
    laravel = data['laravel']
    vue = data['vue']
    english = data['english']
    pro = data['pro']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO term4(id,name,oop,laravel,vue,english,pro) VALUES(%s,%s,%s,%s,%s,%s,%s)", (id,name,oop,laravel,vue,english,pro))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
# Get
@app.route('/term4', methods=['GET'])
def get_term4():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM term4')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "oop":row[2],
            "laravel":row[3],
            "vue":row[4],
            "english":row[5],
            "pro":row[6],
            "average":(row[2] + row[3] + row[4] + row[5] + row[6])/5,
            }
        if ((row[2] + row[3] + row[4] + row[5] + row[6] )/5) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects), 201
# delete
@app.route('/term4/<int:id>', methods=['DELETE'])
def delete_term4(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM term4 WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
# Get
@app.route('/term4/<int:id>', methods=['GET'])
def getspec_term4(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM term4 WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'oop': row[2], 'laravel': row[3], 'vue': row[4], 'english':row[5],'pro':row[6]})
    else:
        return jsonify({'message': 'term4 not found'}), 404
# 
# term1
# add term2
@app.route('/term2', methods=['POST'])
def add_tem2():
    data = request.get_json()
    id = data['id']
    name = data['name']
    algorithm = data['algorithm']
    web = data['web']
    git = data['git']
    english = data['english']
    pro = data['pro']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO term2(id,name,algorithm,web,git,english,pro) VALUES(%s,%s,%s,%s,%s,%s,%s)", (id,name,algorithm,web,git,english,pro))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
# Get
@app.route('/term2', methods=['GET'])
def get_term2():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM term2')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "algorithm":row[2],
            "web":row[3],
            "git":row[4],
            "english":row[5],
            "pro":row[6],
            "average":(row[2] + row[3] + row[4] + row[5] + row[6])/5,
            }
        if ((row[2] + row[3] + row[4] + row[5] + row[6] )/5) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects), 201
# delete
@app.route('/term2/<int:id>', methods=['DELETE'])
def delete_term2(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM term2 WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
# get by id
@app.route('/term2/<int:id>', methods=['GET'])
def getspec_term2(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM term2 WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'algorithm': row[2], 'web': row[3], 'git': row[4], 'english':row[5],'pro':row[6]})
    else:
        return jsonify({'message': 'term2 not found'}), 404
# add term1
@app.route('/term1', methods=['POST'])
def add_tem1():
    data = request.get_json()
    id = data['id']
    name = data['name']
    logic = data['logic']
    bcu = data['bcu']
    ms = data['ms']
    ui = data['ui']
    typing = data['typing']
    english = data['english']
    pro = data['pro']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO term1(id,name,logic,bcu,ms,ui,typing,english,pro) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s)", (id,name,logic,bcu,ms,ui,typing,english,pro))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
# Get
@app.route('/term1', methods=['GET'])
def get_term1():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM term1')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "logic":row[2],
            "bcu":row[3],
            "ms":row[4],
            "ui":row[5],
            "typing":row[6],
            "english":row[7],
            "pro":row[8],
            "average":round((row[2] + row[3] + row[4] + row[5] + row[6] + row[7] + row[8])/7,2),
            }
        if ((row[2] + row[3] + row[4] + row[5] + row[6] + row[7] + row[8])/7) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects), 201
# delete
@app.route('/term1/<int:id>', methods=['DELETE'])
def delete_term1(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM term1 WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
# get by id
@app.route('/term1/<int:id>', methods=['GET'])
def getspec_term1(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM term1 WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'logic': row[2], 'bcu': row[3],'ms': row[4], 'ui': row[5], 'typing': row[6], 'english':row[7],'pro':row[8]})
    else:
        return jsonify({'message': 'term1 not found'}), 404
# add term3
@app.route('/term3', methods=['POST'])
def add_term3():
    data = request.get_json()
    id = data['id']
    name = data['name']
    software = data['software']
    js = data['js']
    php = data['php']
    db = data['db']
    git = data['git']
    pm = data['pm']
    node = data['node']
    oop = data['oop']
    english = data['english']
    pro = data['pro']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO term3(id,name,software,js,php,db,git,pm,node,oop,english,pro) VALUES(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (id,name,software,js,php,db,git,pm,node,oop,english,pro))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
# Get
@app.route('/term3', methods=['GET'])
def get_term3():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM term3')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "software":row[2],
            "js":row[3],
            "php":row[4],
            "db":row[5],
            "git":row[6],
            "pm":row[7],
            "node":row[8],
            "oop":row[9],
            "english":row[10],
            "pro":row[11],
            "average":round((row[2] + row[3] + row[4] + row[5] + row[6] + row[7] + row[8] + row[9] + row[10] + row[11])/10,2),
            }
        if ((row[2] + row[3] + row[4] + row[5] + row[6] + row[7] + row[8] + row[9] + row[10] + row[11])/10) > 50:
            subject['Exam'] = "Pass"
        else:
            subject["Exam"] = "Fail"
        subjects.append(subject)
    return jsonify(subjects), 201
# delete
@app.route('/term3/<int:id>', methods=['DELETE'])
def delete_term3(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM term3 WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
# get by id
@app.route('/term3/<int:id>', methods=['GET'])
def getspec_term3(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM term3 WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()
    if row:
        return jsonify({'id': row[0], 'name': row[1],'software': row[2], 'js': row[3],'php': row[4], 'db': row[5], 'git': row[6], 'pm': row[7],'node':row[8],'oop':row[9], 'english':row[10],'pro':row[11]})
    else:
        return jsonify({'message': 'term3 not found'}), 404
# analyze
@app.route('/analyze/<int:id>', methods=['GET'])
def get_analyze(id):
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM studentlist WHERE id = %s', (id,))
    data = cur.fetchall()
    cur.close()
    # 1
    cur1 = mysql.connection.cursor()
    cur1.execute('SELECT * FROM january WHERE id = %s',(id,))
    data1 = cur1.fetchall()
    cur1.close()
    # 2
    cur2 = mysql.connection.cursor()
    cur2.execute('SELECT * FROM february WHERE id = %s', (id,))
    data2 = cur2.fetchall()
    cur2.close()
    # 3
    cur3 = mysql.connection.cursor()
    cur3.execute('SELECT * FROM march WHERE id = %s', (id,))
    data3 = cur3.fetchall()
    cur3.close()
    # 4
    cur4 = mysql.connection.cursor()
    cur4.execute('SELECT * FROM april WHERE id = %s', (id,))
    data4 = cur4.fetchall()
    cur4.close()
    # 5
    cur5 = mysql.connection.cursor()
    cur5.execute('SELECT * FROM may WHERE id = %s', (id,))
    data5 = cur5.fetchall()
    cur5.close()
    array = []
    # 6
    cur6 = mysql.connection.cursor()
    cur6.execute('SELECT * FROM june WHERE id = %s', (id,))
    data6 = cur6.fetchall()
    cur6.close()
    # 7
    cur7 = mysql.connection.cursor()
    cur7.execute('SELECT * FROM july WHERE id = %s', (id,))
    data7 = cur7.fetchall()
    cur7.close()
    # 8
    cur8 = mysql.connection.cursor()
    cur8.execute('SELECT * FROM august WHERE id = %s', (id,))
    data8 = cur8.fetchall()
    cur8.close()
    # 9
    cur9 = mysql.connection.cursor()
    cur9.execute('SELECT * FROM september WHERE id = %s', (id,))
    data9 = cur9.fetchall()
    cur9.close()
    # 10
    cur10 = mysql.connection.cursor()
    cur10.execute('SELECT * FROM october WHERE id = %s', (id,))
    data10 = cur10.fetchall()
    cur10.close()
    # 11
    cur11 = mysql.connection.cursor()
    cur11.execute('SELECT * FROM november WHERE id = %s', (id,))
    data11 = cur11.fetchall()
    cur11.close()
    # 12
    cur12 = mysql.connection.cursor()
    cur12.execute('SELECT * FROM december WHERE id = %s', (id,))
    data12 = cur12.fetchall()
    cur12.close()
    # term1
    curterm1 = mysql.connection.cursor()
    curterm1.execute('SELECT * FROM term1 WHERE id = %s', (id,))
    dataterm1 = curterm1.fetchall()
    curterm1.close()
    # term2
    curterm2 = mysql.connection.cursor()
    curterm2.execute('SELECT * FROM term2 WHERE id = %s', (id,))
    dataterm2 = curterm2.fetchall()
    curterm2.close()
    # term3
    curterm3 = mysql.connection.cursor()
    curterm3.execute('SELECT * FROM term3 WHERE id = %s', (id,))
    dataterm3 = curterm3.fetchall()
    curterm3.close()
    # term4
    curterm4 = mysql.connection.cursor()
    curterm4.execute('SELECT * FROM term4 WHERE id = %s', (id,))
    dataterm4 = curterm4.fetchall()
    curterm4.close()
    array = []
    object = {
        "average_month":[],
        "average_year1":[],
        "average_year2":[],
        "average_term":[],
        "name":[],
        "id":[],
        "grade":[],
        "joined":[]
    }
    def find_average(data):
        sum_all = 0
        for i in range(len(data)):
            sum_all = round((data[i][2] + data[i][3] + data[i][4])/3,2)
        return sum_all
    def find_id(data):
        id = 0
        for row in data:
            id = row[0]
        return id
    def find_average_term1(data):
        sum_all = 0
        for i in range(len(data)):
            sum_all = round((data[i][2] + data[i][3] + data[i][4] + data[i][5] + data[i][6] + data[i][7] + data[i][8])/7,2)
        return sum_all
    def find_average_term2(data):
        sum_all = 0
        for i in range(len(data)):
            sum_all = round((data[i][2] + data[i][3] + data[i][4] + data[i][5] + data[i][6])/5,2)
        return sum_all
    def find_average_term4(data):
        sum_all = 0
        for i in range(len(data)):
            sum_all = round((data[i][2] + data[i][3] + data[i][4] + data[i][5] + data[i][6])/5,2)
        return sum_all
    def find_average_term3(data):
        sum_all = 0
        for i in range(len(data)):
            sum_all = round((data[i][2] + data[i][3] + data[i][4] + data[i][5] + data[i][6] + data[i][7] + data[i][8] + data[i][9] + data[i][10] + data[i][11])/10,2)
        return sum_all
    def find_name(data):
        name = ""
        for i in range(len(data)):
            name = data[i][1]
        return name
    def find_grade(data):
        grade = ""
        for i in range(len(data)):
            grade = data[i][2]
        return grade
    def find_date(data):
        joined = ''
        for i in range(len(data)):
            joined = data[i][3]
        return joined
    object['average_month'].append(find_average(data1))
    object['average_month'].append(find_average(data2))
    object['average_month'].append(find_average(data3))
    object['average_month'].append(find_average(data4))
    object['average_month'].append(find_average(data5))
    object['average_month'].append(find_average(data6))
    object['average_month'].append(find_average(data7))
    object['average_month'].append(find_average(data8))
    object['average_month'].append(find_average(data9))
    object['average_month'].append(find_average(data10))
    object['average_month'].append(find_average(data11))
    object['average_month'].append(find_average(data12))
    object['average_year1'].append(find_average_term1(dataterm1))
    object['average_year1'].append(find_average_term2(dataterm2))
    object['average_year2'].append(find_average_term3(dataterm3))
    object['average_year2'].append(find_average_term4(dataterm4))
    object['average_term'].append(find_average_term1(dataterm1))
    object['average_term'].append(find_average_term2(dataterm2))
    object['average_term'].append(find_average_term3(dataterm3))
    object['average_term'].append(find_average_term4(dataterm4))
    object['name'].append(find_name(data))
    object['id'].append(find_id(data))
    object['grade'].append(find_grade(data))
    object['joined'].append(find_date(data))
    array.append(object)
    for char in array:
        sum_value = 0
        counter = 0
        for key in char:
            if key == "average_month":
                for u in char[key]:
                    if u > 0:
                        sum_value += u
                        counter += 1
        if counter > 0:
            object['average_total_month'] = round(sum_value/counter,2)
    for char in array:
        sum_value1 = 0
        counter1 = 0
        sum_value2 = 0
        counter2 = 0
        for key in char:
            if key == "average_year1":
                for u in char[key]:
                    if u > 0:
                        sum_value1 += u
                        counter1 += 1
            if key == "average_year2":
                for u in char[key]:
                    if u > 0:
                        sum_value2 += u
                        counter2 += 1
        if counter1 > 0:
            object['average_total_year1'] = round(sum_value1/counter1,2)
        if counter2 > 0:
            object['average_total_year2'] = round(sum_value2/counter2,2)
    array1 = []
    array2 = []
    array3 = []
    for i in range(len(array)):
        for key in array[i]:
            if key == "average_total_year1":
                array1.append(array[i][key])
                array3.append(array[i][key])
            if key == "average_total_year2":
                array2.append(array[i][key])
                array3.append(array[i][key])
            if key == "average_total_month":
                array1.append(array[i][key])
                array2.append(array[i][key])
                array3.append(array[i][key])
    def sum_average(array):
        zero_value = 0
        sum = 0
        counter = 0
        for char in array:
            sum += char
            counter += 1
        if array[0] == sum:
            return zero_value
        else:
            if counter > 0:
                return round(sum/counter,2)
    avg1 = sum_average(array1)
    avg2 = sum_average(array2)
    avg3 = sum_average(array3)
    def result(avg):
        if avg < 70 and avg >= 50:
            return "Good"
        elif avg < 80 and avg >= 70:
            return "Very Good"
        elif avg <= 100 and avg >= 80:
            return "Excellence!"
        else:
            return "fail"
    object['avg_year1'] = avg1
    object['avg_year2'] = avg2
    object['avg_year3'] = avg3
    object['result1'] = result(avg1)
    object['result2'] = result(avg2)
    object['result3'] = result(avg3)
    # avg year
    avg_year = []
    for i in range(len(array)):
        for key in array[i]:
            if key == "avg_year1":
                avg_year.append(array[i][key])
            if key == "avg_year2":
                avg_year.append(array[i][key])
    if len(avg_year) > 0:
        object['avg_year'] = avg_year
    return jsonify(object)
# studentlist
# add studentlist
@app.route('/studentlist', methods=['POST'])
def add_studentlist():
    data = request.get_json()
    id = data['id']
    name = data['name']
    grade = data['grade']
    joined = data['joined']
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO studentlist(id,name,grade,joined) VALUES(%s,%s,%s,%s)", (id,name,grade,joined))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'student added successfully'})
# GET studentlist
@app.route('/studentlist', methods=['GET'])
def get_studentlist():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM studentlist')
    data = cur.fetchall()
    cur.close()
    subjects = []
    for row in data:
        subject = {
            "id":row[0],
            "name":row[1],
            "grade":row[2],
            "joined":row[3]}
        subjects.append(subject)
    return jsonify(subjects), 201
@app.route('/studentlist/<int:id>', methods=['DELETE'])
def delete_studentlist(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM studentlist WHERE id = %s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message":"Student data is gone"})
if __name__ == "__main__":
    app.run(debug=True)