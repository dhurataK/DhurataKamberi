class Animal(object):
    def __init__(self, name, health =100):
        self.name = name
        self.health = health
    def displayHealth(self):
        print " Name: {}\n Health: {}".format(self.name, self.health)
        return self
    def walk(self):
        self.health -= 1
        return self
    def run(self):
        self.health -= 5
        return self

animal = Animal('animal')
print " Animal Class and it's instance: "
animal.walk().walk().walk().run().run().displayHealth()
