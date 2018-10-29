abstract class TestAbstract {
    public abstract NAME: string
}

interface List {
    [name: string]: TestAbstract
}

class Test extends TestAbstract {
    public NAME: string;
    
}

const test: TestAbstract = new Test

const list:List = {
    test: Test
}

console.log(test)