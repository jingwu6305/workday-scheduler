# Work Day Scheduler

URL: https://jingwu6305.github.io/workday-scheduler/

## Application Description

This is an application to help the user enter and save events to each working hour of a day in the browser of their choice.  

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Mockup 
The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Usage

```md
Current date is displayed on the top of the application. 
The schedule covers working hours from 8am to 6pm.
Each block can be used to enter important events of the time period. 
Each block has a background color to show if it is in the past (grey), current (red) of future (green).
Once the user clicks on the save button, the information they enter will be saved to local Storage.
Even if the page is refreshed, they can still browse the information as they wish. 
- - -


## Contributor 
Jing Wu 