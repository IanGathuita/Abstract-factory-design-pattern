//Family in my project is chair + table. Variants of the family are wooden and plastic.

//declare interfaces for each distinct product in the family
interface Chair{
    getPrice():number;
}

interface Table{
    getPrice():number;
    getMaterial():string;
}
//make product variants for each family that implement the interfaces above
class PlasticChair implements Chair{
    getPrice(): number {
        return 250;
    }

}
class PlasticTable implements Table{
    getMaterial(): string {
        return 'plastic';
    }
    getPrice(): number {
        return 500;
    }
}
class WoodenChair implements Chair{
    getPrice(): number {
        return 350;
    }

}
class WoodenTable implements Table{
    getMaterial(): string {
        return 'wood';
    }
    getPrice(): number {
        return 600;
    }
}

//declare an abstract factory - RETURN ABSTRACT PRODUCT TYPES for all products in the FAMILY. The types are defined in the interfaces above
interface FurnitureAbstractFactory {
    createChair(): Chair;
    createTable(): Table;
}

//for each product VARIANT of a family, create a separate factory class based on the abstract factory above. This factory returns concrete products
class ConcretePlasticFactory implements FurnitureAbstractFactory {
    createChair(): Chair {
        return new PlasticChair();
    }
    createTable(): Table {
        throw new PlasticTable();
    }

}

class ConcreteWoodenFactory implements FurnitureAbstractFactory {
    createChair(): Chair {
        return new WoodenChair();
    }
    createTable(): Table {
        throw new WoodenTable();
    }

}

//client code
let plasticVariant:FurnitureAbstractFactory = new ConcretePlasticFactory();
let woodenVariant:FurnitureAbstractFactory = new ConcreteWoodenFactory();

let ChairFamilyPlastic:Chair = plasticVariant.createChair();
let ChairFamilyWooden:Chair = woodenVariant.createChair();

let plasticChairPrice = ChairFamilyPlastic.getPrice();
let woodenChairPrice = ChairFamilyWooden.getPrice();

console.log('Plastic chair price: ',plasticChairPrice);
console.log('Wooden chair price: ',woodenChairPrice);