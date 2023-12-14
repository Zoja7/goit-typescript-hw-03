class Key {
  private signature: number

  constructor () {
    this.signature = Math.random()
  }
  getSignature () {
    return this.signature
  }
}

class Person {
  private key: Key
  constructor (key: Key) {
    this.key = key
  }

  getKey () {
    return this.key
  }
}

abstract class House {
  door: boolean = false
  key: Key
  tenants: Person[] = []

  comeIn (person: Person) {
    if (this.door) {
      return this.tenants.push(person)
    }
  }

  public abstract openDoor(key: Key)
}

class MyHouse extends House {
  constructor (key: Key) {
    super()
    this.key = key
  }
  public openDoor (key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      return (this.door = true)
    } else {
      return (this.door = false)
    }
  }
}

const key = new Key()
const house = new MyHouse(key)
const person = new Person(key)
house.openDoor(person.getKey())

house.comeIn(person)

console.log(house.tenants)

export {}
