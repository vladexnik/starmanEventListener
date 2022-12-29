

'use strict';

document.addEventListener('DOMContentLoaded',()=> {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Ария"
        ]
    };
    
    const advs = document.querySelectorAll('.promo__adv img');
    const genre = document.querySelector('.promo__genre');
    const newbg = document.querySelector('.promo__bg');
    const movieList = document.querySelector('.promo__interactive-list');
    const raitings=document.getElementsByTagName('div span'),
        form=document.querySelector('form.add'),
        input=form.querySelector('.adding__input'),
        checkbox=document.querySelector('[type="checkbox"]');
    
    genre.textContent = "Драма";
    newbg.style.backgroundImage = 'url("img/bg.jpg")';
    

        form.addEventListener('submit', (event)=>{
            event.preventDefault();
            let newfilm=input.value;
            let favorite= checkbox.checked;
            if(favorite){
                alert('Added to favorites')
            }
            if(newfilm){
                if(newfilm.length > 21){
                    newfilm=`${newfilm.slice(0,22)}...`;
                }
                movieDB.movies.push(newfilm);
                movieDB.movies.sort();
                createDB(movieDB.movies,movieList);
                form.reset();
            }
        });

        const deleteAdv=(arr)=>{
            arr.forEach(function(item) {
                item.remove();
            });
        };
        function sortArr(arr1){
            arr1.sort();
        }
    
    function createDB(db, list){
            list.innerHTML = '';
            sortArr(db);
            db.forEach((film, index) => {
            list.innerHTML += `<li class="promo__interactive-item">${index+1} ${film}
                <div class="delete"></div>
             </li>
             `;
        });

        let deleteFilm=document.querySelectorAll('.delete');
        deleteFilm.forEach((btn,i)=>{
            btn.addEventListener('click',()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);

                createDB(db,list);
            })
        })
       
    }
    
    
    deleteAdv(advs);
    createDB(movieDB.movies, movieList);
    
});

