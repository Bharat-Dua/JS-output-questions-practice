function getTime(list,...args,moreItem){
    return [...list,...args,moreItem]
}

getTime(['berry','apple'],'banana','orange') // error bcoz rest operator always comes last in function parameters