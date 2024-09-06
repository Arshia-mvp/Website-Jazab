document.getElementById('add-service').addEventListener('click' , function () {
    const newService = prompt ("لطفا نام خدمات جدید را وارد کنید :");
    if (newService) {
        const listItem = document.createElement('li');
        listItem.textContent = newService;
        document.getElementById('services-list').appendChild(listItem);
    }
});