function Book (title,author,pages,read){
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info=function(){
    return "The "+title+" by "+author+" , "+pages+" pages, "+read; 
  }
}
const book1 = new Book ("Hobbit","Tolkien","295","not read yet");
console.log(book1.info());
