import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

infos= new FormGroup({

 
  blogPost: new FormControl(''),
  blogPostS: new FormControl(''),
  blogBtn: new FormControl(''),
  blogImg: new FormControl(''),
});

blogInfo= new FormControl('');

infoBlog=[{
 
  blogPost:"Melinda",
  blogPostS:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  blogBtn:"Travel Now",
  blogImg:"assets/imgCR7/new york.jpg"
},

{
  blogPost:"Max",
  blogPostS:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  blogBtn:"Travel Now",
  blogImg:"assets/imgCR7/vienna.jpg"
},

{
  blogPost:"Hanna",
  blogPostS:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  blogBtn:"Travel Now",
  blogImg:"assets/imgCR7/brazil.jpg"
},

{ 
  blogPost:"John",
  blogPostS:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
  blogBtn:"Travel Now",
  blogImg:"assets/imgCR7/berlin.jpeg"
}
];


  constructor() {}

  ngOnInit(){
  }

}
