import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactorCollection } from "./CharactersCollection";
import { LinkedList} from "./LinkedList";


//  const numbersCollection = new NumbersCollection([10,30,-2,5]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

 // const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactorCollection('xaays');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-3);
linkedList.add(0);

linkedList.add(25);
linkedList.sort();
linkedList.print();


