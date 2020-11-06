setInterval(() => {
    
        document.getElementById("colorPicker").innerHTML=" ."
        setTimeout(() => {
            document.getElementById("colorPicker").innerHTML=" .."
            setTimeout(() => {
                document.getElementById("colorPicker").innerHTML=" ..."
            }, 200);
        }, 200);
    
}, 600);



