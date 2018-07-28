
function Loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}
var newfile = Loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  skill(data.skill);
})
var child1 = document.querySelector(".childone");
function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
child1.appendChild(image);

var name = document.createElement("name");
name.textContent= det.name;
child1.appendChild(name);

var phoneno = document.createElement("h3");
phoneno.textContent = det.phoneno;
child1.appendChild(phoneno);

var email = document.createElement("a");
email.href = "mailto:yesaswinich@gmail.com";
email.textContent = det.email;
child1.appendChild(email);

var address = document.createElement("h2");
address.textContent = "address";
child1.appendChild(address);

var hr = document.createElement("hr");
child1.appendChild(hr);

var p = document.createElement("p");
p.textContent = det.address;
child1.appendChild(p);
}
var child2 = document.querySelector(".childtwo");
function careerinfo(info) {
  var c = document.createElement("h2");
  c.textContent="Career Objective";
  child2.appendChild(c);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var c1 = document.createElement("p");
  c1.textContent = info.info;
  child2.appendChild(c1);
}
function education(edu) {
  var head=document.createElement("h2");
  head.textContent="Educational Qualification";
  child2.appendChild(head);

  var hr =document.createElement("hr");
  child2.appendChild(hr);

  var table1=document.createElement("table");
  table1.border="1";
  child2.appendChild(table1);

  tabledata="";
  for(i=0;i<edu.length;i++) {
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage;
  }
  table1.innerHTML=tabledata;
}
function skill(skillinfo) {
  var hd = document.createElement("h2");
  hd.textContent="Technical Skills";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(var i=0;i<skillinfo.length;i++){
    var title = document.createElement("h4");
    title.textContent=skillinfo[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=skillinfo[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}

function achievements(act) {
  var hd = document.createElement("h2");
  hd.textContent="Achievements";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(var i=0;i<skillinfo.length;i++){
    var title = document.createElement("h4");
    title.textContent=skillinfo[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=skillinfo[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
  }
}
function openpage(){
  window.open("resume.html","_self",true)
}
