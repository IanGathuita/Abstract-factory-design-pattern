/*Unlike in the Abstract factory, client now creates 2 objects. The first one is for the desired family
e.g domestic animals, the second object is the animal e.g cat */
interface Animal{
    printAnimalType():void;
    printAnimalSound():void;
}

abstract class AnimalFamilyFactory {
    public abstract getAnimal(animalType: string): Animal;
    public static createAnimalFactory(familyType: string): AnimalFamilyFactory {
        if (familyType === "domestic") {
            return new DomesticAnimalFactory();
        }
        else if (familyType === 'wild') {
            return new WildAnimalFactory();
        }
        else {
            throw new Error(`${familyType} is not a supported family`);
        }
    }
}

class DomesticAnimalFactory extends AnimalFamilyFactory{
    public getAnimal(animalType: string): Animal {
        if(animalType === 'cat'){
            return new Cat;
        }
        else{
            throw new Error("You can ony instanciate a cat as a domestic animal for now");
        }
    }
}

class WildAnimalFactory extends AnimalFamilyFactory{
    public getAnimal(animalType: string): Animal {
        if(animalType === 'elephant'){
            return new Elephant;
        }
        else{
            throw new Error("You can ony instanciate an elephant as a wild animal for now");
        }
    }
}



class Cat implements Animal{
    printAnimalType() {
        console.log("I am a cat");
    }
    printAnimalSound(): void {
        console.log("Meowww");
    }
}
class Elephant implements Animal{
    printAnimalType() {
        console.log("I am an elephant");
    }
    printAnimalSound(): void {
        console.log("I trumpet");
    }
}


//client code

let animalFamily:AnimalFamilyFactory = AnimalFamilyFactory.createAnimalFactory('wild');
let animal:Animal = animalFamily.getAnimal('elephant');
animal.printAnimalType();
animal.printAnimalSound();


animalFamily = AnimalFamilyFactory.createAnimalFactory('domestic');
animal = animalFamily.getAnimal('cat');
animal.printAnimalType();
animal.printAnimalSound();





