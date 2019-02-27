/* Snippet from a friend wasn't working as expected */
 /* document.getElementById('beneficiary').addEventListener('change', e =>{
        let beneficiary = e.target.value;
        let formData = new FormData();
        formData.append('beneficiary',beneficiary)
        http.post('/getServicelines',formData)
        .then( data => {
            let options = document.createElement('option');
            if(data == null){
                options.value = 0;
                options.text = "No Records...";
            }else{
                data.forEach( serviceline =>{
                    console.log(serviceline.serviceName);
                    options.value = serviceline.id;
                    options.text = serviceline.serviceName;
                })
            }
            document.getElementById("the_serviceline").appendChild(options);
        })    
        .catch( err => console.error(err) );
}) */

//Solution
//This helped him

 document.getElementById('beneficiary').addEventListener('change', e =>{
        let beneficiary = e.target.value;
        let formData = new FormData();
let options = [];
        formData.append('beneficiary',beneficiary)
        http.post('/getServicelines',formData)
        .then( data => { 
            if(data == null){
options.push(`<option value="0">No Records...</option>`);
            }else{
                data.forEach( serviceline =>{

options.push( `<option value="${serviceline.id}">${serviceline.serviceName}</option>` );

                })
            }
            document.getElementById("the_serviceline").innerHTML = options;
        })    
        .catch( err => console.error(err) );
})
