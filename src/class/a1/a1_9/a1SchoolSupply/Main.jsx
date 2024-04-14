import Pencil from './schoolSupplies/pencil.jpg';
import Eraser from './schoolSupplies/eraser.png';
import Pen from './schoolSupplies/pen.jpg';
import PencilSharperner from './schoolSupplies/pencil sharperner.jpg';
import Book from './schoolSupplies/book.jpg';
import Folder from './schoolSupplies/folder.jpg';
import Schissor from './schoolSupplies/schissor.jpg';
import GlueStick from './schoolSupplies/glue stick.png';
import {ListOfWords} from './../../../vocabList';

const schoolSupplies = [
['Pencil', [Pencil] ],
['Eraser', [Eraser] ],
['Pen', [Pen] ],
['Pencil sharperner', [PencilSharperner] ],
['Book', [Book] ],
['Folder', [Folder] ],
['Scissor', [Schissor] ],
['Glue stick', [GlueStick] ],
 ];

export function A1Schoolsupplie(){
 return (<ListOfWords list={ schoolSupplies } name={'school supply'} /> 
)}
