class Init{
    
    constructor(){
       


        this.label = document.getElementById('label');
        this.users = [];
        this.element = document.getElementsByClassName('users')[0];
                        
    }

    populateList(){
        
        this.users = [
        {
            name: 'Guilherme',
            age: 22
        },
        {
            name: 'Auro',
            age: 22
        },
        {
            name: 'Teste',
            age: 22
        }
        ]
    }
    
    updateView(){
             
       let that = this;      
       for(let user of that.users ){
           
               var elementChild = that.element.cloneNode(true);
               elementChild.innerHTML = user.name;
               that.element.appendChild(elementChild);
               
        }              
    }   
}

let init = new Init();
init.populateList();
init.updateView();

