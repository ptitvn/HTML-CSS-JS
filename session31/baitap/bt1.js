function main(){
    document.getElementById('hideButton').addEventListener('click', function() {
        document.getElementById('text').style.display = 'none';
    });

    document.getElementById('showButton').addEventListener('click', function() {
        document.getElementById('text').style.display = 'block';
    });
}
main();