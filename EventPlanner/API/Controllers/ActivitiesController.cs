using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ActivitiesController() :BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities() //CancellationToken ct
    {
        return await Mediator.Send(new GetActivityList.Query()); //,ct
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        return HandleResult(await Mediator.Send(new GetActivityDetails.Query { Id = id }));
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDTO activityDto){

        return HandleResult(await Mediator.Send(new CreateActivity.Command { ActivityDto = activityDto }));
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(EditActivityDto activity){
         return HandleResult(await Mediator.Send(new EditActivity.Command{ActivityDto = activity}));
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id){

        return HandleResult(await Mediator.Send(new DeleteActivity.Command{Id = id}));
    }

}
