
interface Author {
    author: string;
    price(): number
}

enum publishesData {
    name = 'Author Name',
    python = 400,
    java = 500,
    javascript = 450
}

class JavaBook implements Author {
    author: string = publishesData.name;
    public price(): number {
        return publishesData.java;
    }
}

class PythonBook implements Author {
    author: string = publishesData.name;
    public price(): number {
        return publishesData.python;
    }
}

class JavascriptBook implements Author {
    author: string = publishesData.name;
    public price(): number {
        return publishesData.javascript;
    }
}

class EmployeeFactory {
    // /javascript/g.test('Basic of javascript')
    public static getEmployee(bookType?: string): Author | null {
        bookType = bookType ? bookType.trim()?.toLocaleLowerCase() : '';
        if (/javascript/g.test(bookType)) {
            return new JavascriptBook();
        } else if (/python/g.test(bookType)) {
            return new PythonBook();
        } else if (/java/g.test(bookType)) {
            return new JavaBook();
        } else {
            return null;
        }
    }
}


function client() {
    console.clear();

    const p1 = EmployeeFactory.getEmployee('Javascript: A complete guidance');
    console.log(p1?.price());

    const p2 = EmployeeFactory.getEmployee('Basic of Python');
    console.log(p2?.price());
    const p0 = EmployeeFactory.getEmployee('Python Advance Learning');
    console.log(p0?.price());

    const p3 = EmployeeFactory.getEmployee('Java the Advance Learning');
    console.log(p3?.price());

    const p4 = EmployeeFactory.getEmployee('story book');
    console.log(p4?.price());
    const p5 = EmployeeFactory.getEmployee('Basic of C Language');
    console.log(p5?.price());
}

client();