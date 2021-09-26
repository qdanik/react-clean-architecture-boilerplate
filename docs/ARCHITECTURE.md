# Architecture

  > All information below is a recommendations based on my previous experience.

## Core

  The main part of the application that implements common features that are independent of the project.

## Domain

  The domain layer implements it is all about project business logic and these objects can be classified looking at their design time characteristics:

  ### Domain Entities

    It is all about modelled business objects, attributes and their relationships.

  ### Domain Services

    It defines services that can be implemented in the same layer or in separate layers. This gives an abstraction for certain features as logging, exception handling, that can be managed differently depending on the environment that will use the domain layer.

  ### Domain Logic
    
    Implementation of logic linked to the business objects, as validation rules, factories and repositories.

## Data Access

  An architectural layer that consists of data-access objects and which implements the data access(using Adapter Pattern), hiding the details of implementation within the tier.

## Data Transfer Object

  An object that carries data between layers.

  > For example: You retrieve data and wanted to pass into Domain Layer. Domain layer waiting for Domain Entities, in such case we will implement DTO that converted Data Access Response into Domain Entity.

## Presentation

  The Presentation Layer is responsible for providing the user interface to the end user.

  ### Presenters
  
  It retrieves data from domain services, and formats it for display in the view (using mappers on the same level).

  ### Forms
  
  It implements forms behavior and provide API for work with it.

  ### [Any Additional Sub Layers]

  Above are described most popular sub-layers, you can also create your own sub-layers for the implementation like a Charts, Tables and etc.

  ### Web

  This layer is responsible for the implementation of the Web User Interface and is independent of the framework.

  > For example it can be Mobile layer implemented with react-native, or Desktop layer with Electron.

