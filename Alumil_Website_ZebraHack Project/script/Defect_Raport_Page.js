document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('defectForm');
    const Mesaj_success = document.getElementById('Mesaj_success');
    const fileInput = document.getElementById('Adauga_Poze');
    

    form.addEventListener('submit', function (event) 
    {
        event.preventDefault();

        if (this.checkValidity()) 
        {
            showMesaj_success();
        } else {
            alert('Please fill out all required fields!');
        }
    });

    function showMesaj_success() 
    {
        Mesaj_success.style.display = 'block';
        setTimeout(function () 
        {
            Mesaj_success.style.display = 'none';
        }, 3000); 
        resetForm();
    }

    fileInput.addEventListener('change', handleFiles);

    function handleFiles(event) 
    {
        const files = Array.from(event.target.files); 
        const currentFiles = Array.from(fileInput.files); 
    
        
        if (currentFiles.length > 3) 
        {
            alert("You can add up to 3 pictures!");
            fileInput.value = ''; 
            return; 
        }
    

        const allFiles = [...currentFiles, ...files];
    

        const uniqueFilesMap = new Map();
        allFiles.forEach(file => 
        {
            if (!uniqueFilesMap.has(file.name)) 
            {
                uniqueFilesMap.set(file.name, file);
            }
        });
    

        const uniqueFiles = Array.from(uniqueFilesMap.values());

        if (uniqueFiles.length > 3) 
        {
            alert("Poti adauga maxim 3 poze.");
            return; 
        }
    
     
        const dataTransfer = new DataTransfer();
        uniqueFiles.forEach(file => 
        {
            dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;
    
   }
    
    

    function resetForm() 
    {
        form.reset();
        fileInput.value = ''; 
    }
});